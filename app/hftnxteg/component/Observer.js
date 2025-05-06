import { useEffect, useRef, useState } from "react";

export function userInterSectionoberver() {


    const ref = useRef();

    const [interSectionObserver, setInterSectionObserver] = useState(false)


    useEffect(() => {

        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setInterSectionObserver(entry.isIntersecting);
        }, {
            threshold: 0.5
        })

        observer.observe(ref.current);
        return () => observer.disconnect();

    }, [])


    return { ref, interSectionObserver }

}