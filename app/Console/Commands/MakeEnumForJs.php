<?php

namespace App\Console\Commands;

use App\Enum\Type;
use App\Enum\Plan;
use Illuminate\Console\Command;
use ReflectionClass;
use ReflectionClassConstant;

class MakeEnumForJs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:enum';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Enumを生成する';

    /**
     * enum class一覧
     */
    protected array $enumClasses;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->enumClasses = [
            Type::class,
            Plan::class,
        ];
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        foreach ($this->enumClasses as $enumClass) {
            $this->createEnumJsUsecase($enumClass);
        }
    }

    private function createEnumJsUsecase(string $class)
    {
        $reflectionClass = new ReflectionClass($class);
        $constants = $reflectionClass->getConstants();
        $className = $reflectionClass->getShortName();
        $classDocComment = $reflectionClass->getDocComment();

        /** stubの取得 */
        $stubData = file_get_contents($this->getStubPath());
        /** Classのコメントと名前を置き換え */
        $writableData = str_replace('{{ $classComment }}', $classDocComment, $stubData);
        $writableData = str_replace('{{ $className }}', $className, $writableData);

        /**
         * key名よりオブジェクト値とis〇〇関数の作成
         */
        $keyValue = '';
        $keyValueGuardFunction = '';
        foreach ($constants as $key => $value) {
            $reflectionClassConstant = new ReflectionClassConstant($class, $key);

            /**
             * 定数のDoc Commentを取得
             */
            $constantDocComment = $reflectionClassConstant->getDocComment();
            if ($constantDocComment) {
                $keyValue .= "    {$constantDocComment}\n";

                // guard関数のためのコメント生成/整形
                $guardConstantDocComment = str_replace('    ', '', $constantDocComment);
                $keyValueGuardFunction .= "{$guardConstantDocComment}\n";
            }

            $keyValue .= "    {$key}: '{$value}',\n\n";
            $keyValueGuardFunction .= "export const is{$key} = (v: {$className}): v is '{$key}' => v === {$className}.{$key}\n";
        }

        /** いらない改行、カンマの削除 */
        $keyValue = substr($keyValue, 0, -3);
        /** いらない改行の削除 */
        $keyValueGuardFunction = substr($keyValueGuardFunction, 0, -1);
        $writableData = str_replace('{{ $keyValue }}', $keyValue, $writableData);
        $writableData = str_replace('{{ $keyValueGuardFunction }}', $keyValueGuardFunction, $writableData);

        /**
         * ファイルへの書き込み
         */
        file_put_contents(
            $this->getOutputJsPath().'/'.$className.'.ts',
            $writableData
        );
    }

    private function getStubPath(): string
    {
        return app_path('Console/Commands/stubs/enum.ts.stub');
    }

    private function getOutputJsPath(): string
    {
        return resource_path('/js/enum');
    }
}
