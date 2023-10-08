interface IFormHelper<T> {
    form: React.RefObject<HTMLFormElement>;
    formData: T;
    setFormData: React.Dispatch<React.SetStateAction<T>>;
}

class FormHelper<T> {
    form: React.RefObject<HTMLFormElement>;
    formData: T;
    setFormData: React.Dispatch<React.SetStateAction<T>>;

    constructor({ form, formData, setFormData }: IFormHelper<T>) {
        this.form = form;
        this.formData = formData;
        this.setFormData = setFormData;
    }

    validateForm = (): boolean => {
        if (this.form.current) {
            const isValid: boolean = this.form.current.checkValidity();
            // setIsFormValid might be a function passed in, or handled externally
            // setIsFormValid(isValid);

            return isValid;
        }

        return false;
    };

    handleChangeValues = (value: any) => {
        this.setFormData((prevValue: T) => ({ ...prevValue, [value.target.name]: value.target.value }));
        this.validateForm();
    };
}

export default FormHelper;