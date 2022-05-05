
  describe("some-evil-spec=773", () => {
    it("evil-block-773", () => {
      window.evil_773 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  