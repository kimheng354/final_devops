/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'img':"url('https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }
      
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
    require('@tailwindcss/line-clamp'),
    
  ],
}