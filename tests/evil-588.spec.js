
  describe("some-evil-spec=588", () => {
    it("evil-block-588", () => {
      window.evil_588 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  