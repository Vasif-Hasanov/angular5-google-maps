export class LocalStorage {
    init() {
        // tslint:disable-next-line:prefer-const
        let markers;

        if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined ) {
            console.log('ok...');
            markers = [
                {
                    name: 'Sahil metro',
                    lat: 40.372014,
                    lng: 49.844402,
                    draggable: true
                  },
                  {
                    name: 'Icarishahar metro',
                    lat: 40.366027,
                    lng: 49.831525,
                    draggable: false
                  },
                  {
                    name: '28 May metro',
                    lat: 40.379796,
                    lng: 49.848726,
                    draggable: true
                  },
                  {
                    name: 'Kubinka | need weed? :) just kidding..',
                    lat: 40.382418,
                    lng: 49.833382,
                    draggable: false
                  }
            ];

            localStorage.setItem('markers', JSON.stringify(markers));

        } else {
            console.log('else?');
        }
    }
}
