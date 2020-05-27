const validationFunctions = {
    "string" : val => {
        return typeof val === "string"
    },
    "number" : val => {
        return typeof val === "number"
    },
    "date" : val => {
        const regex = /[0,3]{1}[1,9]{1}\/[0,1]{1}[1,9]{1}\/[0,9]{4}/

        return regex.test(val)
    },
    "boolean" : val => {
        return typeof val === "boolean"
    },
    "required": val => {
        if(val === undefined || val === ''){
            return false
        }else{
            return true
        }
    }
}

const validate = (data, validations) => {
    const keys = Object.keys(validations)

    let valid = true

    keys.forEach(key => {
        const someValidations = validations[key].split("|")

        someValidations.forEach(validation => {
            valid = validationFunctions[validation](data[key])

            if(!valid){
                throw new Error(`Field ${key} is not valid.`)
            }
        })
    })

    return valid
}

module.exports = validate