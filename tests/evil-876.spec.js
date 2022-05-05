
  describe("some-evil-spec=876", () => {
    it("evil-block-876", () => {
      window.evil_876 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  