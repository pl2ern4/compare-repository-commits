

export const replacStringithValue = (str, object, regexp)=> 
     String(str).replace(regexp || (/\\?\{([^{}]+)\}/g), (match, name) =>(
        (object[name] != null) ? object[name] : match
    )
);
