
  describe("some-evil-spec=502", () => {
    it("evil-block-502", () => {
      window.evil_502 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  