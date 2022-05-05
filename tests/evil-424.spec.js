
  describe("some-evil-spec=424", () => {
    it("evil-block-424", () => {
      window.evil_424 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  