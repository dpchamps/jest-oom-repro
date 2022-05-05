
  describe("some-evil-spec=465", () => {
    it("evil-block-465", () => {
      window.evil_465 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  