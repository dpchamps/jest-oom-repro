
  describe("some-evil-spec=693", () => {
    it("evil-block-693", () => {
      window.evil_693 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  