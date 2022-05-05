
  describe("some-evil-spec=709", () => {
    it("evil-block-709", () => {
      window.evil_709 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  