export const mergeClassNames = (initialClasses: string, className: string) => {
        let classNames = initialClasses
        if (className) {
            classNames = initialClasses + " " + className;
        }
        return classNames;
}
