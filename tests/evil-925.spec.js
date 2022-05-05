
  describe("some-evil-spec=925", () => {
    it("evil-block-925", () => {
      window.evil_925 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  