import React from "react";



export default function DrinkRecipe({ recipe }) {
    console.log(recipe)

    var ingredients = [];
    var measures = [];



    for (var key of Object.keys(recipe)) {
        if (key.includes("strIngredient")) {
            if (recipe[key] != null) {
                ingredients.push(recipe[key])
            }
        }
        if (key.includes("strMeasure")) {
            if (recipe[key] != null) {
                measures.push(recipe[key])

            }
        }
    }


    return (
        <div className="Cocktails pb-2">
            <table className="pb-2">

                {ingredients.map((value, index) => <tr><td>{value}</td><td>  </td> <td> {measures[index]}</td></tr>)}



            </table>
            {recipe.strInstructions}
        </div>

    )
}