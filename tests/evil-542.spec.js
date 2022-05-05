
  describe("some-evil-spec=542", () => {
    it("evil-block-542", () => {
      window.evil_542 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  