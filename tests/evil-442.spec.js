
  describe("some-evil-spec=442", () => {
    it("evil-block-442", () => {
      window.evil_442 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  