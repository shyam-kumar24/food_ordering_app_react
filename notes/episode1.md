# introduction to react: react is a javascript library . means it can be utilised inside our app in whatever part i want to apply react.

#  package.json is a configuration for npm
#  what is the difference between package.json and package-lock.json
# if u have package.json and package-lock.json then u can bring all the node-modules by doing npm install. in your project. 
# npx parcel index.html >> to start the app

# git init
# git branch -M main >> git add . >> git commit -m 'episode 1' >> git remote add origin https://github.com/shyam-kumar24/food_ordering_app_react.git >> git push origin main
# npm install -D parcel >> to install parcel in the app.
# in package.json >> ^ is used this is for updating minor version whenever it comes.

# parcel
- Dev build
- Local server
- HMR - Hot module replacement.
- File watching algorithm . written in c++
- Caching- faster build
- image optimization
- minification
- bundling
- compressing.
- code splitting
- differential bundling - support older browser
- diagnostics
- error handling
- https
- tree shaking- remove unused code 

# read from parcel documentation
# when we push out code on git then node and dist files are not pushed but they are again downloaded by server itself
  for making the app live.

# when u do npm start behind the scene u r doing npm run start. and this is calling parcel index.html

const heading = React.createElement('h1', {
    id: 'heading',
    className: 'heading'
}, 'Hello world from react')
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)
// heading is an object and root.render is making that an element.

# react and jsx are two different thing . jsx is not a part of react. but it makes react code writting easy . 
# jsx is different from html. it is not html . it looks like html
# jsx before going to js engine . it gets transpiled by babel. in js code . 
# as we write component : <Title/> and <Title></Title> are the same . 

# 
const jsxHeading = ( <h1 className="heading">this is jsx heading</h1> )

// react functional component.
const Title = () => {
   return  <h1>this is a title.</h1>
}

// when curly braces then have to write return

const HeadingComponent = () => {
    return <div>
        <Title/>
        <h3>this is a component</h3>
    </div>
}
// this is known as component composition

# config driven ui. 

# why to give unique key to each childred item while rendering the list? 
if any new item comes or goes then react identifies the item to be rendered or removed so unnecessary whole list rendering is not done . which is a huge optimisation of run time.
never use indexes as a key. read the react doc article on this. 

# in one file u can have only one default export 

# i got the image directly from swigy api. cdn image is constant part of image url and claudinary id is changing part . u have to find the cdn by directly going to swigy and checking the common part in 3-4 image url directly fetched from swigy. 

# react hooks: normal javascript utility function . written by facebook developers
# whenever a state variable is updated . react re-renders the component.
# power of react state variable makes data layer and ui layer in sync. react does very fast dom manipulation and ui updation so react is superfast.

# Reconciliation algorithm: (react fiber)

# virtual DOM : is a representation of actual DOM. diff algorithm finds out the difference between the previous virtual dom and updated virtual dom. virtual dom takes object. 

# react-virtual dom. 

# microservices: this is simply seperation of concerns. 

# two way of api rendering : page loads> api call > render. it takes some time. second way is : page loads> render skeleton > apicall > render. this is better approach and gives a better ux .

# useEffect: when the component renders or loads . then the callback function inside the component run

# const [btnName, setBtnName] = useState('login') now question is when we update the setBtnName then how we can update a constant variable ? . here we are not updating a constant variable but here whole component is getting rerender and new btnName variable is getting initiated with  not the defaut value but with new value updated by set function. 

# whenever state variable changes or updates . react triggers a reconciliation cycle . or it re renders the whole component.

# to show more restaurant on scroll do fetch post call . 
# https://corsproxy.io

# when the dependency array is not present then useEffect gets executed after every render. 
# if there is empty dependency array then the component renders only once . 

######## Routing ..............................
1. npm install react-router-dom
2. import createBrowserRouter from 'react-router-dom'
3. configure createBrowserRouter like this : 
    const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>
    },
    {
        path: '/about',
        element: <About />
    }
])
4. import RouterProvider ;
# in case of hydration error check for react-router-dom version if it is 7 then uninstall and install 6 version

# useRouteError : provided by react-router-dom ; is used to give detail information about error.
# outlet is like tunnel and all children come over there according to their path.
# why there was a need to put children ? since we want to keep the header intact while routing. while without children it is going to completely new page which is not desired. so children and outlet came. 
# this 3 thing need to import : createBrowserRouter , RouterProvider, Outlet to use routing. 

# routing through ancor tag reloads the complete page. while link dont do so 

# two type of routing in react:
1. server side routing 2. client side routing. 
    link tag does client side routing since we are not making any server connection in this process.
# Dynamic routing;

# how we did dynamic routing ! we made cards clickable and put link to the url having link . then in restaurantMenu page we fetched the id using "useParams" hook provided by react-router-dom ! and then used that hook to fetch the detailed menu of the restaurant clicked. and at the same time we had mentioned this restaurant/id path in app.js for routing to restaurantMenu page. !!! great engineering !!

# Link is provided by react-router-dom. 
# in class based component . first constructor is called then render is called and so on.
# after constructor and render mounted . componentDidMount() method is called or executed. and this is also used to make api call.

# render cycle: react-class-based component: for many children also . first constructor is called then render is called of all the childs then componentDidMount is called . of each child seperately . 

# hook is a helper function. like in restaurantMenu page i can seperate the logic of data fetching in seperate hook called useRestaurantMenu 

# to make the app more optimised . we use lazy loading or on demand loading.  for that we have to import lazy . provided by react. 

# since due to lazy that component is not in main app file so . when u click then react makes one api call fetches that file . in between react is so fast that it renders and finds no file so it gives error . so to handle this react gives "Suspense" component. to wrap the lazy lodaing component. that takes one fallback also 

# how can u forget ctrl + space bar 

# higher order component: it is just  a fucntion it takes a component and tweakes it and returns back another new component. 

# lifting the state ; means taking control from a child component to parent component.

# go to react doc and learn the lifting the state up. article

# prop drilling : read doc of react;
# for global state management . context is used . which data is used inside the context ? the data that can be used at many places only that data need to be stored in context. 

# REDUX 

# redux store have different slices for different functionality. like cart slice, user slice etc. u cant modify ur slice directly . u have to dispatch an action when u click on add item in cart. then that dispatch action will call a function and that function will update the cart slice. and that function is known as reducer. then to read the data in slice we use selector fucntion that reads the data in slice and that updates the cart with new updated value. and this phenomenon of reading the data using selector is called subscribing the store. 

# when u click on add button >> action is dispatched >> reducer function is called >> stores slice is updated >> selector function is called and store is subscribed through it and store is updated by this way . 

# Redux toolkit
- install @reduxjs/toolkit and react-redux
- Build our store 
- Connect our store to our app
- Slice(cartSlie)
- dispatch(action)
- Selector

