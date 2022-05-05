
  describe("some-evil-spec=573", () => {
    it("evil-block-573", () => {
      window.evil_573 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  