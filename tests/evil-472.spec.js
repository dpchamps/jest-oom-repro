
  describe("some-evil-spec=472", () => {
    it("evil-block-472", () => {
      window.evil_472 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  