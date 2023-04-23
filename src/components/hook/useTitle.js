import {useEffect} from 'react'

export default function useTitle(title) {
  useEffect(() => {
    document.title = `Gm | ${title}`
    window.scrollTo(0, 0);
  },[title])
}
