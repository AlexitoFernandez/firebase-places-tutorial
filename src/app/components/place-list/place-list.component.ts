import { Component, OnInit } from '@angular/core';
import Place from 'src/app/interfaces/place.interface';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places: Place[] = [];

  placeholderPlace: Place = {
    name: 'Prueba de sitio',
    description: 'Esto es una prueba',
    latitude: 40,
    longitude: -3,
    image: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
  };

  constructor(
    private placesService: PlacesService
  ) {}

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      if (places.length === 0) {
        this.places = [this.placeholderPlace];
      } else {
        this.places = places;
      }
    });
  }

  async onClickDelete(place: Place) {
    const response = await this.placesService.deletePlace(place);
    console.log(response);
  }

}
