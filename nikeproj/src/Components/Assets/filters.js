let filters = [
    {
        id : "Category" ,
        name : "Category" ,
        options : [
            {value : "Men" , Id : 'men' ,  label : "Men"} ,
            {value : "Women" ,  Id : 'women' , label : "Women"} ,
            {value : "Kids" ,  Id : 'kids' , label : "Kids"}
        ],
        activeFilters : []
    },
    {
        id : "Price" ,
        name : "Shop By Price" ,
        options : [
            {value : "Range1" ,   Id : 'price1' ,label : "Below ₹ 2500"} ,
            {value : "Range2" ,  Id : 'price2' ,label : "₹ 2501 - ₹ 7500"} ,
            {value : "Range3" ,  Id : 'price3' ,label : "₹ 7501 - ₹ 12999"},
            {value : "Range4" ,  Id : 'price4' , label : "Above ₹ 13000"},
        ],
        activeFilters : []
    },
    {
        id : "Sale" ,
        name : "Sales And Offers" ,
        options : [
            {value : "Sale" , Id : 'sale' , label : "Sale"} ,
        ],
        activeFilters : []
    },
    {
        id : "sizes" ,
        name : "Size" ,
        options : [
            {value : "4" , Id : 'sizes' , label : ""} ,
            {value : "4.5" , Id : 'sizes' , label : ""} ,
            {value : "5" , Id : 'sizes' , label : ""} ,
            {value : "5.5" , Id : 'sizes' , label : ""} ,
            {value : "5.7" , Id : 'sizes' , label : ""} ,
            {value : "6" , Id : 'sizes' , label : ""} ,
            {value : "6.5" , Id : 'sizes' , label : ""} ,
            {value : "6.6" , Id : 'sizes' , label : ""} ,
            {value : "7" , Id : 'sizes' , label : ""} ,
            {value : "7.5" , Id : 'sizes' , label : ""} ,
            {value : "8" , Id : 'sizes' , label : ""} ,
            {value : "8.5" , Id : 'sizes' , label : ""} ,
            {value : "8.7" , Id : 'sizes' , label : ""} ,
            {value : "9" , Id : 'sizes' , label : ""} ,
        ],
        activeFilters : []
    },
    {
        id : "Type" ,
        name : "Types" ,
        options : [
            {value : "Air Jordan" , Id : 'jordans' , label : "Nike Air Jordan"} ,
            {value : "Air Max" , Id : 'max' , label : "Nike Air Max"} ,
            {value : "Nike Air Yeezy" ,Id : 'Yeezy' , label : "Nike Air Yeezy"},
            {value : "Air Force" , Id : 'AirForce' , label : "Nike Air Force"},
            {value : "Nike Air Tailwind" ,Id : 'Tailwind' , label : "Nike Air Tailwind"},
            {value : "Nike Blazer" ,Id : 'Blazer' , label : "Nike Blazer"},
            {value : "Nike Dunk" ,Id : 'Dunk' , label : "Nike Dunk"},
            {value : "Nike Free" ,Id : 'Free' , label : "Nike Free"},
            {value : "Nike Shox" ,Id : 'Shox' , label : "Nike Shox"},
            {value : "Nike Terminator" ,Id : 'Terminator' , label : "Nike Terminator"},
            {value : "Nike Air Max EasyOn" , Id : 'MaxEasyon' , label : "Nike EasyOn"},
            {value : "Nike Sunray Protect" , Id : 'Protext' , label : "Nike Sunray"},
            {value : "Nike Revolution" , Id : 'Revolution' , label : "Nike Revolution"},
            {value : "Giannis Immortality" , Id : 'Giannis' , label : "Giannis"},
        ],
        activeFilters : []
    },
    {
        id : "colour" ,
        name : "Colour" ,
        options : [
            {value : "Black" , Id : 'black' , label : "Black"} ,
            {value : "White" , Id : 'white' , label : "White"} ,
            {value : "Gold" , Id : 'gold' , label : "Gold"} ,
            {value : "Pink" , Id : 'pink' , label : "Pink"} ,
            {value : "Blue" , Id : 'blue' , label : "Blue"} ,
            {value : "Red" , Id : 'red' , label : "Red"} ,
            {value : "Yellow" , Id : 'yellow' , label : "Yellow"}
        ],
        activeFilters : []
    },
    {
        id : "Game" ,
        name : "Game" ,
        options : [
            {value : "Lifestyle" , Id : 'lf' , label : "Lifestyle"} ,
            {value : "Jordan" , Id : 'jrdan' , label : "Jordan"} ,
            {value : "Football" , Id : 'fball' , label : "Football"} ,
            {value : "Basketball" , Id : 'bball' , label : "Basketball"} ,
            {value : "Running" , Id : 'runnings' , label : "Running"} ,
            {value : "Training" , Id : 'gyms' , label : "Training"} ,
            {value : "Skateboarding" , Id : 'skts' , label : "Skateboarding"},
            {value : "Golf" , Id : 'gfls' , label : "Golf"},
            {value : "Tennis" , Id : 'tnns' , label : "Tennis"},
            {value : "Athletics" , Id : 'athlts' , label : "Athletics"},
            {value : "Yoga" , Id : 'yogs' , label : "Yoga"},
        ],
        activeFilters : []
    }
]

export default filters