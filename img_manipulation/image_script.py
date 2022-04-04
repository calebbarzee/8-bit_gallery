import os
import math
import json
from PIL import Image
# Documentation
# https://pillow.readthedocs.io/en/stable/reference/Image.html


class FileEntry:
    def __init__(self, movement, artist, filename):
        self.filepath = f"8-bit_art_processed/{movement}/{artist}/{filename}"
        self.movement = self._get_movement(movement)
        self.title = self._get_title(filename)
        self.artist = self._get_artist(artist)

    def _get_movement(self, movement):
        movement = movement.replace("_", " ")
        movement = movement.title()
        return movement

    def _get_artist(self, artist):
        artist = artist.replace("_", " ")
        artist = artist.title()
        return artist

    def _get_title(self, filename):
        filename = filename.replace("_", " ")
        head, sep, tail = filename.partition('.')
        title = head.title()
        return title


def pixelate(movement, artist, img_filename):

    # Open image
    with Image.open(f"8-bit_art/{movement}/{artist}/{img_filename}") as img:
        # Resize smoothly down to 32x32 pixels
        img_pixelated = img.resize((64, 64), resample=Image.BILINEAR)
        # Scale back up using resize_factor depending on portrait or landscape
        resize_factor = 1.0
        if img.width > img.height:
            # landscape image resize
            resize_factor = 1200/img.width
            new_height = math.floor(img.height*resize_factor)
            final_img = img_pixelated.resize((1200, new_height), Image.NEAREST)
        else:
            # square or portrait image resize
            resize_fator = 1200/img.height
            new_width = math.floor(img.width*resize_factor)
            final_img = img_pixelated.resize((new_width, 1200), Image.NEAREST)

        # Save
        movement_folders = os.listdir("8-bit_art_processed")
        # print(movement_folders)
        if movement not in movement_folders:
            os.mkdir(f"8-bit_art_processed/{movement}")
        artist_folders = os.listdir(f"8-bit_art_processed/{movement}")
        if artist not in artist_folders:
            os.mkdir(f"8-bit_art_processed/{movement}/{artist}")
        final_img.save(
            f"8-bit_art_processed/{movement}/{artist}/{img_filename}")


def generate_json(art_list):
    # with open("art.json") as json_file:
    #     json_file.write(json.dumps(art_list))

    f = open("art.json", "w")
    text = json.dumps(art_list)
    print(text)
    f.write(text)
    f.close()


def traverse_files():
    # initialize art list class
    art_list = []

    movements = os.listdir("8-bit_art")
    if ".DS_Store" in movements:
        movements.remove(".DS_Store")
    # print(movements)
    for movement in movements:
        artists = os.listdir(f"8-bit_art/{movement}")
        if ".DS_Store" in artists:
            artists.remove(".DS_Store")
        # print(artists)
        for artist in artists:
            images = os.listdir(f"8-bit_art/{movement}/{artist}")
            if ".DS_Store" in images:
                images.remove(".DS_Store")
            for image in images:
                pixelate(movement, artist, image)
                art_object = FileEntry(movement, artist, image)
                # convert object to dictionary
                art_dict = art_object.__dict__
                # add new art_dict to art_list
                art_list.append(art_dict)
                # print(art_list)
    generate_json(art_list)


traverse_files()
