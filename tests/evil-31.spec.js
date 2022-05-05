
  describe("some-evil-spec=31", () => {
    it("evil-block-31", () => {
      window.evil_31 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  