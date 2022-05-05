
  describe("some-evil-spec=838", () => {
    it("evil-block-838", () => {
      window.evil_838 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  