<?php

namespace App\Console\Commands;

use App\Enum\Extend;
use App\Enum\Type;
use App\Enum\Plan;
use App\Enum\PrefCode;
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
            Extend::class,
            Plan::class,
            PrefCode::class,
            Type::class,
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
        $className = $reflectionClass->getShortName();

        /** stubの取得 */
        $stubData = file_get_contents($this->getStubPath());

        /**
         * key名よりオブジェクト値とis〇〇関数の作成
         */
        $keyValue = '';
        $keyValueGuardFunction = '';
        foreach ($reflectionClass->getConstants() as $key => $value) {
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
            $keyValueGuardFunction .= "export const is{$key} = (v: any): v is '{$value}' => v === {$className}.{$key}\n";
        }

        /** いらない改行、カンマの削除 */
        $keyValue = substr($keyValue, 0, -3);
        /** いらない改行の削除 */
        $keyValueGuardFunction = substr($keyValueGuardFunction, 0, -1);

        /**
         * stubの置き換え
         *
         * Classのコメントと名前を置き換え
         * 定数をkeyとvalueにする
         */
        $writableData = $this->replaceTogether(
            [
                new ReplaceValueObject('{{ $classComment }}', $reflectionClass->getDocComment() ?? ''),
                new ReplaceValueObject('{{ $className }}', $className),
                new ReplaceValueObject('{{ $keyValue }}', $keyValue),
                new ReplaceValueObject('{{ $keyValueGuardFunction }}', $keyValueGuardFunction),
            ],
            $stubData
        );

        /**
         * ファイルへの書き込み
         */
        file_put_contents(
            $this->getOutputJsPath().'/'.$className.'.ts',
            $writableData
        );

        // test生成
        $stubData = file_get_contents($this->getStubTestPath());
        $keyValueTest = '';
        foreach ($reflectionClass->getConstants() as $key => $value) {
            $keyValueTest .= "    it('is{$key}', () => {\n";
            $keyValueTest .= "        expect(TestFunc.{$className}.{$key}).toBe('{$value}')\n";
            $keyValueTest .= "        expect(TestFunc.is{$className}('{$value}')).toBeTruthy()\n";
            $keyValueTest .= "        expect(TestFunc.is{$key}('{$value}')).toBeTruthy()\n";
            $keyValueTest .= "        expect(TestFunc.is{$key}('aaaaabbbbcccc')).toBeFalsy()\n";
            $keyValueTest .= "    })\n";
        }

        /**
         * stubの置き換え
         *
         * Classのコメントと名前を置き換え
         * 定数をkeyとvalueにする
         */
        $writableData = $this->replaceTogether(
            [
                new ReplaceValueObject('{{ $className }}', $className),
                new ReplaceValueObject('{{ $test }}', $keyValueTest),
            ],
            $stubData
        );

        /**
         * ファイルへの書き込み
         */
        file_put_contents(
            $this->getOutputJsTestPath().'/'.$className.'.spec.ts',
            $writableData
        );
    }

    /**
     * まとめて置き換える
     *
     * @param ReplaceValueObject[] $replaceValueObjects
     * @param string $data
     * @return void
     */
    private function replaceTogether(array $replaceValueObjects, string $data): string
    {
        $_data = $data;
        foreach ($replaceValueObjects as $replaceValueObject) {
            $_data = str_replace(
                $replaceValueObject->search,
                $replaceValueObject->replace,
                $_data
            );
        }

        return $_data;
    }

    private function getStubPath(): string
    {
        return app_path('Console/Commands/stubs/enum.ts.stub');
    }

    private function getStubTestPath(): string
    {
        return app_path('Console/Commands/stubs/enum_test.ts.stub');
    }

    private function getOutputJsPath(): string
    {
        return resource_path('/js/enum');
    }

    private function getOutputJsTestPath(): string
    {
        return resource_path('/js/__tests__/enum');
    }
}

class ReplaceValueObject
{
    public string $search;
    public string $replace;
    public function __construct(string $search, string $replace)
    {
        $this->search = $search;
        $this->replace = $replace;
    }
}
