export default {
  'branches': [
    'production',
    {
      'name': 'staging',
      'prerelease': 'staging',
    },
    {
      'name': 'development',
      'prerelease': 'development',
    },
  ],
  'plugins': [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@codedependant/semantic-release-docker',
      {
        'dockerTags': [
          'latest',
          '{{version}}',
        ],
        'dockerImage': 'app',
        'dockerFile': 'Dockerfile',
        'dockerLogin': false,
        'dockerRegistry': 'ver.wtf:5050',
        'dockerProject': 'ver.id/platform/content/documentation',
      },
    ],
  ],
};
