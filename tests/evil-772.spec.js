
  describe("some-evil-spec=772", () => {
    it("evil-block-772", () => {
      window.evil_772 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  