
# About
Toffeeblr

Made with React and React Bootstrap

## TODO
- [x] React router setup
- [x] Login / Signup view cleanup
- [x] Page transition animations with [react-transition-group](https://reactcommunity.org/react-transition-group/)
- [x] Redux setup
- [x] Use redux info to render Navbar (display details or just the login button)
- [x] Login / Signup functionality (they should be hooks instead)
- [x] Network APIs (async thunks)

- [x] PostCard component
- [x] Explore
- [x] Feed
- [x] New post
- [x] View other blogs [router pass params](https://stackoverflow.com/questions/45898789/react-router-pass-param-to-component)
- [x] Follow button in navbar
- [x] Likes
- [x] Display number of notes
- [ ] Account ( Likes / follow list / settings / posts & reblogs / followers list )
- [ ] Comments
- [x] Reblogs
- [ ] Tags

- [x] Apply login on signup
- [x] Auth state numbers
- [ ] Rich text editor
- [ ] Add is-valids to forms
- [ ] "Discard this post?"
- [ ] TextArea stretch container instead of displaying a scrollbar 
- [ ] Switch over to [react-router-transition](https://www.npmjs.com/package/react-router-transition) for better animations
- [ ] Reroute pages that require token headers to home or login page
- [ ] If not signed in, dont show all the follow buttons
- [ ] Show edit button and hide like button if it's your own post

## Provisionary tasks
- [ ] Hover showing recent posts of a user
- [ ] Sidebar user profile
- [ ] Lazy loading / pagination requests
- [ ] Searchbar
- [ ] Notifications
- [ ] Messaging??

## Bugs
- [ ] Like status not showing on user liked page posts
- [ ] Don't show follow if on users' own page
- [ ] Determine which ones are two-way follows for the followers list
- [ ] Refresh feed and explore page each time their nav buttons are clicked
- [ ] Refresh on new post creation

## Redux should store
- username & token
- number of likes, posts, followers, followings

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:8123](http://localhost:8123) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

