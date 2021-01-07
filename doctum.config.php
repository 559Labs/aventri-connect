 <?php

use Doctum\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;
use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;

$dir = __DIR__;

print("--> " . $dir);

$iterator = Finder::create()
    ->files()
    ->name("*.php")
    ->exclude("vendor")
    ->exclude("docs")
    ->exclude("_parked")
    ->in($dir);

// $versions = GitVersionCollection::create($dir)
//     ->add("develop", "Develop")
//     ->addFromTags("*")
//     ->add("main", "Main")
// ;

return new Doctum (
    $iterator,
    [
        "theme"                => "default",
        "title"                => "Aventri Connect API",
        "build_dir"            => $dir . "/docs/build/%version%",
        "cache_dir"            => $dir . "/docs/cache/%version%",
        "default_opened_level" => 1,
        // "versions" => $versions,
    ]
);
