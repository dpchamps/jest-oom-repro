
  describe("some-evil-spec=64", () => {
    it("evil-block-64", () => {
      window.evil_64 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  