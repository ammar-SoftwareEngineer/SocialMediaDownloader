from django.shortcuts import render
from .forms import LinkForm
from .VideoDownloader import VideoDownloader


# Create your views here.
def Home(request):
    form = LinkForm()
    context = {
        'form': form,
        'case': None
    }

    if request.method == 'POST':
        form = LinkForm(request.POST)
        if form.is_valid():
            url = form.data['url']
            VideoDownloader(url)
            context['case'] = 'Download Done'
        else:
            context['case'] = 'Download Failed'
            print('not valid')

    return render(request, 'index.html', context)
