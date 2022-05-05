
  describe("some-evil-spec=973", () => {
    it("evil-block-973", () => {
      window.evil_973 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  