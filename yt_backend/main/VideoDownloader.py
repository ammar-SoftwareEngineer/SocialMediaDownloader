import youtube_dl

SAVE_PATH = 'Downloads/'


class VideoDownloader:
    ydl_opts = {
        'format': 'best',
        'outtmpl': f'{SAVE_PATH}%(title)s' + '.mp4',
        'noplaylist': True,
    }

    def __init__(self, url):
        with youtube_dl.YoutubeDL({}) as ydl:
            ydl.download([url])
