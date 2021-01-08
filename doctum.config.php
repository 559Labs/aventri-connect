 <?php

if (is_file(getcwd() . '/vendor/autoload.php')) {
    require_once getcwd() . '/vendor/autoload.php';
}


use Doctum\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;
use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Carbon\Carbon;

$dir = __DIR__;

print("--> " . $dir);

$iterator = Finder::create()
    ->files()
    ->name("*.php")
    ->exclude("vendor")
    ->exclude("dist")
    ->exclude("_parked")
    ->in($dir);

$versions = GitVersionCollection::create($dir)
    ->add("develop", "Develop")
    ->addFromTags("*")
    ->add("main", "Main")
;

return new Doctum (
    $iterator,
    [
        "theme"                => "default",
        "title"                => "Aventri Connect API: " . Carbon::now()->toDateString(),
        "build_dir"            => $dir . "/dist/build/%version%",
        "cache_dir"            => $dir . "/dist/cache/%version%",
        "default_opened_level" => 1,
        "versions" => $versions,
    ]
);
