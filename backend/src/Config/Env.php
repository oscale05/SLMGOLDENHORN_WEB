<?php
declare(strict_types=1);

namespace SLM\Config;

class Env
{
    public static function load(string $file): void
    {
        if (!is_file($file)) return;
        foreach (file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
            if (str_starts_with(trim($line), '#')) continue;
            [$k, $v] = array_map('trim', explode('=', $line, 2) + ['', '']);
            if ($k !== '' && !isset($_ENV[$k])) {
                $_ENV[$k] = $v;
                putenv("$k=$v");
            }
        }
    }

    public static function get(string $key, ?string $default = null): ?string
    {
        return $_ENV[$key] ?? getenv($key) ?: $default;
    }
}
