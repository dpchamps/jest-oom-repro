
  describe("some-evil-spec=605", () => {
    it("evil-block-605", () => {
      window.evil_605 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  