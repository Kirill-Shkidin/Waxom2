const filter_el = {
  data() {
    return {
      userSearch: ''
    }
  },
  template: `
          <form action="#" class="search-form" @submit.prevent='$parent.$refs.products.filter(userSearch)'>
            <input type="text" class="search-field" v-model='userSearch'>
            <button class="btn-search" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g>
                  <g>
                    <path d="M23.761 23.763a.785.785 0 0 1-1.098 0l-6.217-6.12a10.155 10.155 0 0 1-6.353 2.22C4.52 19.862.001 15.415.001 9.928 0 4.443 4.519-.002 10.093-.002c5.575 0 10.093 4.445 10.094 9.93 0 2.565-.997 4.897-2.618 6.658l6.193 6.095a.758.758 0 0 1 0 1.082zM18.633 9.93c0-4.641-3.823-8.404-8.54-8.404-4.716 0-8.54 3.763-8.54 8.404 0 4.643 3.824 8.405 8.54 8.405 4.717 0 8.54-3.762 8.54-8.405z" />
                    <path d="M23.761 23.763a.785.785 0 0 1-1.098 0l-6.217-6.12a10.155 10.155 0 0 1-6.353 2.22C4.52 19.862.001 15.415.001 9.928 0 4.443 4.519-.002 10.093-.002c5.575 0 10.093 4.445 10.094 9.93 0 2.565-.997 4.897-2.618 6.658l6.193 6.095a.758.758 0 0 1 0 1.082zM18.633 9.93c0-4.641-3.823-8.404-8.54-8.404-4.716 0-8.54 3.763-8.54 8.404 0 4.643 3.824 8.405 8.54 8.405 4.717 0 8.54-3.762 8.54-8.405z" />
                  </g>
                </g>
              </svg>
            </button>
          </form>
    `
}