<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    private const SHARE_MODE_FLAG = 'framework/share-mode';

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (is_file(storage_path(self::SHARE_MODE_FLAG))) {
            Vite::useHotFile(storage_path('framework/vite.hot.disabled'));
        }

        if (! app()->runningInConsole()) {
            $host = request()->getHost();

            if (str_ends_with($host, '.trycloudflare.com')) {
                URL::forceScheme('https');
                URL::forceRootUrl('https://'.$host);
                Vite::createAssetPathsUsing(fn (string $path) => secure_asset($path));
            }
        }

        Vite::prefetch(concurrency: 3);
    }
}
