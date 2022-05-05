
  describe("some-evil-spec=507", () => {
    it("evil-block-507", () => {
      window.evil_507 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  