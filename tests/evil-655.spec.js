
  describe("some-evil-spec=655", () => {
    it("evil-block-655", () => {
      window.evil_655 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  