async function getCost() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const mode = document.getElementById("mode").value;

    if (!from || !to) {
        alert("Enter both FROM and TO");
        return;
    }

    const res = await fetch(`/travel?from=${from}&to=${to}&mode=${mode}`);
    const data = await res.json();

    if (data.error) {
        document.getElementById("distance").innerText = "Invalid place names";
        return;
    }

    document.getElementById("distance").innerText = "Distance: " + data.distance + " km";
    document.getElementById("cost").innerText = "Cost: ₹" + data.cost;
}
