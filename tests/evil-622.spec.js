
  describe("some-evil-spec=622", () => {
    it("evil-block-622", () => {
      window.evil_622 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  