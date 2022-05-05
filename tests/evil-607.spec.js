
  describe("some-evil-spec=607", () => {
    it("evil-block-607", () => {
      window.evil_607 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  