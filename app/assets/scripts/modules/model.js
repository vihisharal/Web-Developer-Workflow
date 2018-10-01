import $ from "jquery";

class Model{
    constructor(){
        this.openModelButton=$(".open-model");
        this.model=$(".model");
        this.modelCloseButton=$(".model__close");
        this.events();
    }
    events(){
        //clicking the open model button
        this.openModelButton.click(this.openModel.bind(this));

        // clicking the 'X' clode button
        this.modelCloseButton.click(this.clodeModel.bind(this));

        //pushes the escape key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if(e.keyCode ==27) {//Esc press
            this.clodeModel();
        }
    }

    openModel(){
        this.model.addClass("model--is-visible");
        return false;
    }
    clodeModel(){
        this.model.removeClass("model--is-visible");
        return false;
    }
}

export default Model;