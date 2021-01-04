<?php

namespace App\Console\Commands;

use App\Enum\Extend;
use App\Enum\Type;
use App\Enum\Plan;
use App\Enum\PrefCode;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use ReflectionClass;
use ReflectionClassConstant;

class MakeEnumForTs extends Command
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
     *
     * @var string[]
     */
    protected array $enumClasses;

    /**
     * Stubの格納
     */
    protected string $stubDataForMain;

    /**
     * テストのStubの格納
     */
    protected string $stubDataForTest;

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
        $this->init();
    }

    private function init()
    {
        /** stubの取得 */
        $this->stubDataForMain = file_get_contents($this->getStubPath());
        $this->stubDataForTest = file_get_contents($this->getStubTestPath());
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        foreach ($this->enumClasses as $enumClass) {
            $this->createEnumTsUsecase($enumClass);
        }
    }

    /**
     * TsのEnumを生成する
     *
     * @param string $class
     * @return void
     */
    private function createEnumTsUsecase(string $class)
    {
        $reflectionClass = new ReflectionClass($class);
        $className = $reflectionClass->getShortName();

        /**
         * key名よりオブジェクト値とis〇〇関数の作成
         */
        $keyValue = '';
        $guardFunctionDefinitions = '';
        foreach ($reflectionClass->getConstants() as $key => $value) {
            $reflectionClassConstant = new ReflectionClassConstant($class, $key);
            $guardFunctionName = 'is'.$this->upperCamelCase($key);

            /**
             * 定数のDoc Commentを取得
             */
            $constantDocComment = $reflectionClassConstant->getDocComment();
            if ($constantDocComment) {
                $keyValue .= "    {$constantDocComment}\n";

                // guard関数のためのコメント生成/整形
                $guardConstantDocComment = str_replace('    ', '', $constantDocComment);
                $guardFunctionDefinitions .= "{$guardConstantDocComment}\n";
            }

            $keyValue .= "    {$key}: '{$value}',\n\n";
            $guardFunctionDefinitions .= "export const {$guardFunctionName} = (v: any): v is '{$value}' => v === {$className}.{$key}\n";
        }

        /** いらない改行、カンマの削除 */
        $keyValue = substr($keyValue, 0, -3);
        /** いらない改行の削除 */
        $guardFunctionDefinitions = substr($guardFunctionDefinitions, 0, -1);

        /**
         * stubの置き換え
         *
         * Classのコメントと名前を置き換え
         * 定数をkeyとvalueにする
         */
        $writableData = $this->replaceTogether(
            [
                new ReplaceTogetherArg('{{ $classComment }}', $reflectionClass->getDocComment() ?? ''),
                new ReplaceTogetherArg('{{ $className }}', $className),
                new ReplaceTogetherArg('{{ $keyValue }}', $keyValue),
                new ReplaceTogetherArg('{{ $keyValueGuardFunction }}', $guardFunctionDefinitions),
            ],
            $this->stubDataForMain
        );

        /**
         * ファイルへの書き込み
         */
        file_put_contents(
            $this->getOutputJsPath().'/'.$className.'.ts',
            $writableData
        );

        // test生成
        $keyValueTest = '';
        foreach ($reflectionClass->getConstants() as $key => $value) {
            $guardFunctionName = 'is'.$this->upperCamelCase($key);
            $keyValueTest .= "    it('{$guardFunctionName}', () => {\n";
            $keyValueTest .= "        expect(TestFunc.{$className}.{$key}).toBe('{$value}')\n";
            $keyValueTest .= "        expect(TestFunc.is{$className}('{$value}')).toBeTruthy()\n";
            $keyValueTest .= "        expect(TestFunc.{$guardFunctionName}('{$value}')).toBeTruthy()\n";
            $keyValueTest .= "        expect(TestFunc.{$guardFunctionName}('aaaaabbbbcccc')).toBeFalsy()\n";
            $keyValueTest .= "    })\n";
        }
        $keyValueTest = substr($keyValueTest, 0, -1);

        /**
         * stubの置き換え
         *
         * Classのコメントと名前を置き換え
         * 定数をkeyとvalueにする
         */
        $writableData = $this->replaceTogether(
            [
                new ReplaceTogetherArg('{{ $className }}', $className),
                new ReplaceTogetherArg('{{ $test }}', $keyValueTest),
            ],
            $this->stubDataForTest
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
     * @param ReplaceTogetherArg[] $replaceValueObjects
     * @param string $data
     * @return string
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

    /**
     * アッパーキャメルケースに変換する
     *
     * @param string $str
     * @return string
     */
    private function upperCamelCase(string $str): string
    {
        return Str::studly(strtolower($str));
    }
}

class ReplaceTogetherArg
{
    public string $search;
    public string $replace;
    public function __construct(string $search, string $replace)
    {
        $this->search = $search;
        $this->replace = $replace;
    }
}
