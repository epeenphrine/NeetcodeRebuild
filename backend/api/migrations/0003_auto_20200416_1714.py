# Generated by Django 3.0.3 on 2020-04-16 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200415_2042'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='tweetapi',
            options={'verbose_name_plural': 'Tweets'},
        ),
        migrations.AddField(
            model_name='tweetapi',
            name='url',
            field=models.CharField(default=1, max_length=400),
            preserve_default=False,
        ),
    ]
