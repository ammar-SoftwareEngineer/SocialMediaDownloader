from django import forms


class LinkForm(forms.Form):
    url = forms.CharField(
        max_length=1500,
        widget=forms.TextInput(attrs={
            'class': 'link',
            'placeholder': 'Paste The Link Here',
            'name': 'url-download',
            'type': 'url',
        }))
