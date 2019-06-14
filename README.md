# rn-text-button

## Usage

```jsx
    <TextButton
        caption="Submit"
        onPress={somefunction}
        bold
        italic
        underline
        color="#00f"
    />
```

## Properties

 Name           | Description                                   | Type     | Required | Default Value 
:---------------|:-------------------------------------------   | --------:|:--------:|:--------------
 caption        | Caption of the button                         | string   | yes      |          
 disabled       | Make the button disabled                      | boolean  |          | false         
 onPress        | Callback when the button is pressed           | function | yes      |          
 bold           | Make the text bold                            | boolean  |          | false    
 italic         | Make the text italic                          | boolean  |          | false    
 underline      | Make the text underline                       | boolean  |          | false    
 color          | Change text color                             | string   |          | `#2f2f2f`  
 disabledColor  | Change text color when disabled               | string   |          | `#8C8C8C`  
 containerStyle | Style for button container                    | String   |          | {}         
 textStyle      | Style for button text. This takes precedence over `bold`, `italic`, `underline` and `color` props |   String |           | {}
 
