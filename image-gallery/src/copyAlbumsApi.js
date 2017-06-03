// import lordsOfDogtown from './photos/lordsOfDogtown.jpg';
import jayAdams from './photos/jayAdams.png';
import peggyOki from './photos/peggyOki.jpg';
// import mikeKolar from './photos/mikeKolar.jpg';
import peggyTurner from './photos/peggyTurner.jpg';
import lauraThornhill from './photos/lauraThornhill2.jpg';
// import rampage from './photos/rampage.jpg';
import tonyAlva from './photos/tonyAlva.jpg';
// import surfTurf from './photos/surfTurf.png';
import shortId from 'shortid';


const albums = [
    {
        name: 'Z-Team',
        _id: shortId.generate(),
        images: [{
            title: 'Z Boys',
            description: 'Zephyr skate team 1970\'s',
            url:'https://theselvedgeyard.files.wordpress.com/2012/12/zephyr-skate-team-z-boys-skateboarder.jpg?w=700',
            wiki: 'https://en.wikipedia.org/wiki/Z-Boys',
            _id: shortId.generate()
        },

        {
            title: 'Jumping Homies',
            description: 'Mike Kolar 1970\'s',
            url: 'https://s-media-cache-ak0.pinimg.com/originals/5c/5a/53/5c5a538be085b6a3a8c29a8474c3dc8a.jpg',
            wiki: 'https://www.washingtonpost.com/news/in-sight/wp/2015/08/20/locals-only-sun-drenched-vintage-photos-show-the-dawn-of-californias-skateboarding-culture-in-the-1970s/?utm_term=.33b15ce4e7ce',
            _id: shortId.generate()
        },

        {
            title: 'Surf Turf',
            description: 'Dowgtown: Locals Only',
            url:'https://theselvedgeyard.files.wordpress.com/2012/12/dogtown-zephyr-surf-team-jeff-ho.png?w=900&h=584',
            wiki: '',
            _id: shortId.generate()
        },

        {
            title: 'Pre-Party',
            description: 'Team Zephr pre-comp',
            url: 'https://professorsteven.files.wordpress.com/2014/09/zephyrteamphoto.jpg',
            _id: shortId.generate()

        },
        {
            title: 'Mid-Party',
            description: 'Poppin Bottles',
            url: 'http://www.angelfire.com/ca2/dtown//images/jeffho33.jpg',
            _id: shortId.generate()

        }]

    },


    {
        name: 'Z-Street',
        _id: shortId.generate(),
        images: [{

            title: 'Turn Only',
            description: 'Jay Adams gets low',
            url:'https://professorsteven.files.wordpress.com/2014/09/jayadamsbycraigstecyk.jpg',
            wiki: 'http://www.skateboardinghalloffame.org/projects/2012-jay-adams-2/',
            _id: shortId.generate()
        },

        {
            title: 'Peggy Does Venice',
            description: 'Peggy Oki repping Zephr',
            url:'https://resizing.flixster.com/BcmHNkK827IO9T1Zgrs2x0b9__A=/300x300/v1.bjs3MDU0Mzg7ajsxNzM3ODsxMjAwOzM2MDA7MjcwMA',
            wiki: 'http://www.skateboardinghalloffame.org/projects/2012-peggy-oki-2/',
            _id: shortId.generate()

        }]

    },

    {
        name: 'Z-Compete',
        _id: shortId.generate(),
        images: [{

            title: "Tippin' Toes",
            description: 'Laura Thornhill in skate competition 1970\'s',
            url:'http://www.monsterchildren.com/wp-content/uploads/2016/11/monster-children-molly-unsung-heroines-13.jpg',
            wiki:'http://www.skateboardinghalloffame.org/projects/2013-laura-thornhill-caswell/',
            _id: shortId.generate()
        },

        {
            title: 'Custom Trucks',
            description: 'Tony Alva with custom gear',
            url:'https://media-cdn.tripadvisor.com/media/photo-s/09/89/40/be/surf-skate-supply.jpg',
            wiki: 'http://www.skateboardinghalloffame.org/projects/tony-alva/',
            _id: shortId.generate()

        },

        {
            title: "Van Fans",
            description: 'Peggy Turner repping Vans in skate competition',
            url: 'https://s-media-cache-ak0.pinimg.com/originals/aa/1a/d8/aa1ad8d08a043c27cba87fe6aa40da9c.jpg',
            wiki: '',
            _id: shortId.generate()
        }]
    }
];

export default {
    //get all albums and make copy of array of objects
    getAlbums() {
        return Promise.resolve(albums.slice());
    },

    //  getAlbum(albumId) {
    //   return Promise.resolve(albums.find(album => album.id === albumId));
    // },

    addAlbum(album) {
        const saved = {
            ...album,
            _id: shortId.generate()
        }
        return Promise.resolve(saved);

    },
    deleteAlbum(id) {
        const index = albums.findIndex(album => album._id === id);
        //splice out the index with a matching id to the desired deleted album
        if (index > -1) albums.splice(index, 1);
        return Promise.resolve(index !== -1);
    }
}