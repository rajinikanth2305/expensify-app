import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure(
    {
        adapter:new Adapter()

    }
)



//little bit configuration for using enzyme
//we have to create new config file in root folder where we will setup the configuration and after that we will give path in pacjage.json
//enzyme library is created by airbnb for testing purpose and we have to use it 
